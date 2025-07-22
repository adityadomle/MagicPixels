import Home from 'react'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen  bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1>AI Image enhancer</h1>
        <p>Powered by AI</p>
      </div>
      <Home />
      <div className='text-lg text-gray-500'>
        Upload your images and see the magic happen!
      </div>
    </div>
  )
}

export default App;