# Routes:

All routes should start with /api/v1/

## /uploadData

Title - Input Field (50 characters)
Description - Text area (200 characters)

Upload Thumbnail (Image - Formats - JPG and PNG only)
Upload Video (Video file format - MPG, AVI, MP4 only)
API Integration: Upload image and video to Cloudinary.com.

### MongoDB:

title, description, imageURL, videoURL

### Cloudinary:

image and video

## /showData

Display the thumbnails along with Title.

## /video

Play the video
