import React, { Component, useState } from 'react'
import Book from './Book'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import "./addform.css"

// export default class AddForm extends Component {

//     constructor() {
//         super()

//         this.state = {
//             books: [],

//             title: '',
//             author: '',
//             year: '',
//         }
//         this.Submithandeler = this.Submithandeler.bind(this)
//         this.Titlehandeler = this.Titlehandeler.bind(this)
//         this.Authorhandeler = this.Authorhandeler.bind(this)
//         this.Yearhandeler = this.Yearhandeler.bind(this)

//     }
//     Submithandeler(event){
//         event.preventDefault()
//         if(this.state.title.length <= 0 && this.state.author.length <=0 && this.state.year.length <= 0 ){
//             alert("give info pls")
//         }else{
//             let newbook = {
//                 id: this.state.books.length +1,
//                 title: this.state.title,
//                 author:this.state.author,
//                 year:this.state.year

//             }
//             this.setState({
//                 books:[...this.state.books,newbook]
//             })
//             this.setState({
//                 title:"",
//                 author:"",
//                 year:""
//             })
//         }

//     }
//     Titlehandeler(event){
//         this.setState({
//             title : event.target.value
//         })        
//     }
//     Authorhandeler(event){
//         this.setState({
//             author : event.target.value
//         })

//     }
//     Yearhandeler(event){
//         this.setState({
//             year : event.target.value
//         })
//     }




//     render() {
//         return (
//             <>
//                 <form id="book-form" autocomplete="off" onSubmit={this.Submithandeler}>
//                     <div className="form-group">
//                         <label for="title">Title</label><br/>
//                         <input type="text" onChange={this.Titlehandeler} value={this.state.title} id="title" className="form-control" />
//                     </div>

//                     <div className="form-group">
//                         <label for="author">Author</label><br />
//                         <input type="text" onChange={this.Authorhandeler} value={this.state.author} id="author" className="form-control" />
//                     </div>

//                     <div className="form-group">
//                         <label for="year">Year</label><br />
//                         <input type="text" onChange={this.Yearhandeler} value={this.state.year} id="year" className="form-control" />
//                     </div>
//                     <input type="submit" value="Add Book" className="btn-submit" />
//                 </form>
//                 <table class="table table-striped mt-5 text-center">
//                     <thead>
//                         <tr className='table-up'>
//                             <th>Title</th>
//                             <th>Author</th>
//                             <th>Year</th>
//                         </tr>
//                     </thead>
//                     {this.state.books.map( book =>(
//                         <tbody id="book-list">
//                             <Book  key={book.id} {...book} />
//                         </tbody>
//                     ))}

//                 </table>


//             </>
//         )
//     }
// }

export default function AddForm() {

        const[title,setTitle] = useState('')
        const[author,setAuthor] = useState('')
        const[year,setYear] = useState('')
        const[books,setBooks] = useState([])


        const Submithandeler=(event) =>{
            event.preventDefault()
            if(title.length <= 0 && author.length <=0 && year.length <= 0 ){
                alert("give info pls")
            }else{
                let newbook = {
                    id: books.length +1,
                    title: title,
                    author:author,
                    year:year

                }
                setBooks([...books,newbook])

                setTitle("")
                setAuthor("")
                setYear("")

                // this.setState({
                //     books:[...this.state.books,newbook]
                // })
                // this.setState({
                //     title:"",
                //     author:"",
                //     year:""
                //     })
                }

            }
    const Titlehandeler = (event) =>{
            setTitle(event.target.value)        
    }
    const Authorhandeler = (event) =>{
            setAuthor(event.target.value)

    }
    const Yearhandeler= (event) =>{
        setYear(event.target.value)
    }

  return (
    <>
                    <form id="book-form" autocomplete="off" onSubmit={Submithandeler}>
                        <div className="form-group">
                             <label for="title">Title</label><br/>
                           <input type="text" onChange={Titlehandeler} value={title} id="title" className="form-control" />
                       </div>
    
                         <div className="form-group">
                             <label for="author">Author</label><br />
                             <input type="text" onChange={Authorhandeler} value={author} id="author" className="form-control" />
                         </div>
    
                         <div className="form-group">
                             <label for="year">Year</label><br />
                             <input type="text" onChange={Yearhandeler} value={year} id="year" className="form-control" />
                         </div>
                         <input type="submit" value="Add Book" className="btn-submit" />
                     </form>
                     <table class="table table-striped mt-5 text-center">
                         <thead>
                             <tr className='table-up'>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year</th>
                           </tr>
                        </thead>
                        {books.map( book =>(
                            <tbody id="book-list">
                                <Book  key={book.id} {...book} />
                            </tbody>
                        ))}
    
                    </table>
    
    
                </>
  )
}
