import connectDB from "./db" ;
import {Board , Column} from "./models" ;




 const DEFAULT_COLUMNS = [
  {
    name: "Wish List",
    order: 0,
  },
  { name: "Applied", 
    order: 1 
},
  { name: "Interviewing",
     order: 2 
 },
  { name: "Offer",
     order: 3 
    },
  { name: "Rejected",
     order: 4 
  },
];


export default async function initUserBoard(userId: string) {

    try {

        await connectDB() ;

      const existingBoard = await Board.findOne( {userId , name : " JOb Hunt" })

      if (existingBoard) {
        return existingBoard ;
      }

       // create a new board for the user
      const newBoard =  await Board.create({
        name : " JOb Hunt" ,
        userId ,    
        columns : []
          })

        // create default columns for the new board

    const columns = await Promise.all(DEFAULT_COLUMNS.map((col) => Column.create(
        {
            name : col.name ,
            order : col.order ,
            boardId : newBoard._id ,
            jobApplications : []
        }
    )))

    // update the new board with the created columns    
     newBoard.columns = columns.map((col) => col._id) ;

      await newBoard.save() ;


      return newBoard ;

    }
    catch (error){
        throw new Error("Failed to initialize user board: " + error);

    }

}