

const PreviewCard = () => {
  const name = "Emmy";
  const message = "Tunji is a good ";
  const sender = "Goke";
  return (
    <div className='' id="card_body">
        
        {/* <div className='bg-white max-w-md shadow-lg h-[80vh] px-3 py-10 min-w-96'>

          <div className='card my-1 h-44'>
            Check your card 
          </div>

          <div className="card h-44 skew-x-12">
            <div>
              <h2 className='text-center'>
                Hii Emmy
              </h2>
            </div>

            <div className='my-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat laborum eum vero! Nisi, praesentium! Nam, corrupti placeat? Odio nobis accusamus officia, doloribus temporibus eveniet delectus eius quis quam voluptates ex.
            </div>

          </div>



          
        </div> */}

<div className="birthdayCard">
        <div className="cardFront">
          
        </div>
        <div className="cardInside">
          <h3 className="back">SPECIAL BIRTHDAY ❤️ </h3>
          <p className="preview_text">Hi {name},</p>
          <p className="preview_text">{message}</p>
          <p className="name">{sender}</p>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard