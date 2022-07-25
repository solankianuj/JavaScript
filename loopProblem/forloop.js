let dogs=["bulldog","pitbull","labrador"];
i=0;
alldogs="";
// while (i<dogs.length) {
//     alldogs += dogs[i++] + " ";
//     console.log(alldogs);
// }


do{
alldogs+= dogs[i++]+" ";
}while(i<dogs.length)
console.log("New :" +alldogs);