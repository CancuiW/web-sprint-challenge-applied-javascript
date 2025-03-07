import axios from "axios";



const Tabs = (topics) => {
  const topic = document.createElement("div")
  topic.className = "topics"
  for (let i of topics){
    const element = document.createElement("div")
    element.className = "tab"
    element.textContent = String(i)
    topic.appendChild(element)


  }
  return topic
}
const tabsAppender = (selector) => {
  axios.get(`http://localhost:5001/api/topics`)
    .then(res => {
      
      const keys = res.data.topics
     
      document.querySelector(selector).appendChild(Tabs(keys))

    })
    .catch(err => {
      console.error(err)
    })
} 
  





  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


//const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.

 //Unable to find an element with the text: node.js. This could be because the text is broken up by multiple elements. 
 //In this case, you can provide a function for your text matcher to make your matcher more flexible.

  // axios.get(`http://localhost:5001/api/articles`)
  //   .then(res => {
  //     const re = res.data.articles
  //     const keys = Object.keys(re)
  //     document.querySelector(selector).appendChild(Tabs(keys))

  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })

  // axios.get(`http://localhost:5001/api/articles`)
  //   .then(res => {
  //     const keys = Object.keys(res.data.articles)
     
  //     document.querySelector(selector).appendChild(Tabs(keys))

  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
//} 
  
export { Tabs, tabsAppender }
