function Notas({valordaNota}) {
    return(
        <>
         <input 
           type="text" 
           placeholder="Insira a nota"
           onChange={(el) => valordaNota(el.target.value)}
           >
         </input>
        </>
    )
}

export default Notas;