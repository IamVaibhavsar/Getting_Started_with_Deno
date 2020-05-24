import { Application, Router }  from "https://deno.land/x/oak/mod.ts";

//FILE: model
interface Course {
    name: string,
    price: number,
    certification: boolean
}

//FILE:  Data
 //array of objects
let courses: Array<Course> = [
    {
        name: "C++ Bootcamp",
        price:199,
        certification: true,

    }, 
    {
        name: "MERN Bootcamp",
        price:199,
        certification: true,

    }, 
    {
        name: "React Crash Course",
        price:0,
        certification: false,

    }, 
    {
        name: "Flutter Course",
        price:699,
        certification: true,

    }, 
];


//FILE: Controllers- login behind routes

export const getCourses = ({response} : {response: any}) => {
    response.body = courses;
};

export const addCourses =  async (
    { request, response } : { 
        request: any; 
        response: any 
    }
    ) => {
    const body  = await request.body();         //waiting for body to send request
    const course: Course = body.value;          //converting input data according to Course interface(model)

    courses.push(course)        //pushing data of body to courses array
    response.body = {courseAdded: "Course Added Successfully!"};
    response.status = 200;

};

//FILE: Server file
const router = new Router();            //creating object in TS
const app = new Application();
const PORT = 4300;

router
.get("/learn", getCourses)
.post("/create", addCourses);

//middlewares
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 4300 });







