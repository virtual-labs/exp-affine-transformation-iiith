export OPENCV_FLAGS=$(pkg-config --cflags --libs opencv4)

g++ codes/latest_affine.cpp $OPENCV_FLAGS -o execs/affine.out
g++ codes/im_colour.cpp $OPENCV_FLAGS -o execs/colour.out 

cp execs/affine.out ../assignment/execs/affine.out
cp execs/colour.out ../assignment/execs/colour.out