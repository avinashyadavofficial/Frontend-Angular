interface Book{
    title: string;
    author:string;
    pages:number;
}
const myBook: Book = {
    title: "AutoBiography",
    author: "Avinash",
    pages: 300
};
interface Ebook extends Book{
    fileSize: number;
}
const myEbook:Ebook={
    title: "Biography",
    author:"Raj",
    pages:250,
    fileSize:10
}
console.log(myBook);
console.log(myEbook);

