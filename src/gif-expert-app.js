
import React, { useState } from 'react'

// import de componentes
import { AddCategory } from './Components/AddCategory'
import {GifGrid} from './Components/GifGrid'
//

const GifExpertApp = () => {

   const [categories, setCategories] = useState(["Goku"])

  return (
      <>
        <h2>Gif Expert App</h2>

        <AddCategory setCategories={setCategories}/>
        
        <hr/>

        <ol>
            {
                categories.map( category=> 
                  (<GifGrid 
                    key={category }
                    category={category}
                    /> 
                  ))
            }
        </ol>

      </>
  )
}

export default GifExpertApp



