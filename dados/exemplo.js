const [id, nome, duracaoMin, preco, imagem_url] = useState([])
const [carregando, setCarregando] = useState([true])
const [erro, setErro] = useState("")

useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/servicos")
    .then((resposta) =>{
        if (!resposta.ok) throw new Error("Não foi possível carregar.")
       })
       .then((dados) => setServico(dados))
       .catch((e) => setErro(e.message))
       .finally(() => setCarregando(false))

}, [])
