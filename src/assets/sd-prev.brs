imageFile_1 = "Crashtest_01.jpg"
videoFile_1 = "Crashtest.mp4"
videoFile_2 = "Crashtest.mp4"

v = CreateObject("roVideoPlayer")
p = CreateObject("roMessagePort")
v.SetPort(p)

mode=CreateObject("roVideoMode")
mode.SetMode("1920x1080x60p")

t = CreateObject("roTouchScreen")
t.SetPort(p)
t.SetResolution(1920, 1080)
t.AddRectangleRegion(0,0,1920,1080,1) 'Whole sreen

v.SetLoopMode(0) ' loop off=0 loop on=1
v.SetViewMode(2)
v.StopClear()

EnableZoneSupport(true)

i=CreateObject("roImagePlayer")
i.SetDefaultMode(0)

Print "Main loop"

i.DisplayFile(imageFile_1)
stage = 0
main_loop:

  msg = wait(0,p)
		 print "msg_a: ";msg

'---------touch-----------				
                        if type(msg)="roTouchEvent" then
				x_pos =msg.GetX()
				y_pos =msg.GetY()
				print "x,y: ";x_pos;y_pos

                        if stage = 0 then
'---------Video 1------
			if 960 > x_pos and x_pos > 0 then 
				if 1080 > y_pos and y_pos > 0 then
                                        i.StopDisplay()
                                        v.Show()
                                        v.PlayFile(videoFile_1)
                                        stage = 1
                                        print "video_1"
                                endif 
     			 endif

'---------Video 2------
			if 1920 > x_pos and x_pos > 960 then 
				if 1080 > y_pos and y_pos > 0 then
                                        i.StopDisplay()
                                        v.Show()
                                        v.PlayFile(videoFile_2)
                                        stage = 1
                                        print "video_2"
                                endif 
     			 endif

                endif                         
endif                         

'-------------end video----------
        if type(msg) = "roVideoEvent" then			
                if msg.GetInt() = 8 then 
      			print "End_Of_File"
                        stage = 0
                        v.Hide()
                        i.DisplayFile(imageFile_1) 'start over
                endif
        endif
                                        

'----------end messageport-----------   
        

GoTo main_loop

