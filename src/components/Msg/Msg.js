import './Msg.css'

function Msg({children, cor}){
    return(
      <div className="mensagem">
        <h3>Mensagem do dia: </h3>
        <p style={{color:cor}}>{children}</p>
      </div>
    )
  }

  export default Msg;