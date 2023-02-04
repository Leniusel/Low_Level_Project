# Low_Level_Project
Low-level project on three.js.


The project is located in the Project1 folder. This is a random ice cream generator.

The function emptyCone creates an empty waffle cone object. The cone geometry is set to the following: the radius is set to 3, the height set to 5, and the radical segments to 60. This is to prevent the cone from looking like a pyramid. I also set the cone to be hollow since this is supposed to be an ice cream cone. The waffle image is used to create the ice cream cone's mesh. The matrix is applied to flip the cone so that the open end of the cone is facing upwards and its pointed side is pointed downward.  

The stock image used can be found here: https://www.pexels.com/photo/six-baked-waffles-and-blueberries-131045/

The flavor function randomizes the ice cream flavors by numbers 0-4. It is also used to set up the flavor text that would appear according to what ice cream is chosen. Each choice will load a different image for the texture of the new ice cream mesh. The function returns the flavor variable, which will be used for the spawnScoop function.
All stock images used for the different ice cream flavors are found here: https://unsplash.com/photos/66IZaW9LIpI

The spawnScoop function creates the scoop object. The scoop dimensions are defined with the same radius as the cone using Sphere Geometry. I want a dome shape object, so the scoop's theta length is cut in half of its default. The function calls for the flavor function to get the material the scoop object should be covered with. If you move around the editor, you will see that the scoop dome is hollow. The hollow shell needs to be covered. To do this, a flat circle is made. Using circle geometry with the same radius and width as the scoop sphere, we cover the hole in the dome. Before attaching the circle to the bottom of the scoop, the circle has to be rotated since it is slightly tilted. It can be rotated to the same value as the scoop's theta length since that is where the sphere is cut. 

The init function sets up the scene. The empty one and spawnScoop functions are called to place the objects in the scene. Directional and ambient lights are added so the objects can be seen. The camera is set in front of both the scoop and cone objects. An event listener is added to respond to a mouse click via the clickMe function.

The clickMe function takes the mouse key input and reloads the webpage to randomize another ice cream flavor. 



