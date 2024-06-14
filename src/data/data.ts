import { IPost } from "../app/interfaces/IPost";

export const dataApp: IPost[] = [
  {
    title: 'O que é uma linguaguem de programação? Conheça as principais',
    description: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando',
    data: '17 ago, 2024',
    isLiked: true,
  },
  {
    title: 'GitHub agora permite fazer login sem precisar de senha',
    description: 'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
    data: '12 de jul, 2024',
    isLiked: false
  },
  {
    title: 'Por que os hiperlinks são azuis em sua maioria?',
    description: 'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
    data: '21 de jun, 2024',
    isLiked: false
  }
]
