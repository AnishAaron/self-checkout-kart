# Python program to save a
# video using OpenCV

import os
str=input("Enter the name of object ur scanning")

os.mkdir(str)


import cv2
import moviepy.editor as moviepy
# Create an object to read
# from camera
video = cv2.VideoCapture(0)

# We need to check if camera
# is opened previously or not
if (video.isOpened() == False):
    print("Error reading video file")

# We need to set resolutions.
# so, convert them from float to integer.
frame_width = int(video.get(3))
frame_height = int(video.get(4))

size = (frame_width, frame_height)

# Below VideoWriter object will create
# a frame of above defined The output
# is stored in 'filename.avi' file.
result = cv2.VideoWriter('filename.avi',
                         cv2.VideoWriter_fourcc(*'MJPG'),
                         10, size)

while (True):
    ret, frame = video.read()

    if ret == True:

        # Write the frame into the
        # file 'filename.avi'
        result.write(frame)

        # Display the frame
        # saved in the file
        cv2.imshow('Frame', frame)

        # Press S on keyboard
        # to stop the process
        if cv2.waitKey(1) & 0xFF == ord('s'):
            break

    # Break the loop
    else:
        break

# When everything done, release
# the video capture and video
# write objects
video.release()
result.release()
cv2.destroyAllWindows()
print("The video was successfully saved")
clip = moviepy.VideoFileClip("filename.avi")
clip.write_videofile("lof1.mp4")


vidcap = cv2.VideoCapture('lof1.mp4')
success,image = vidcap.read()
count = 0
os.chdir(str)
while success:
  cv2.imwrite("frame%d.jpg" % count, image)     # save frame as JPEG file
  success,image = vidcap.read()
  print('Read a new frame: ', success)
  count += 1

print("read")

# Closes all the frames


