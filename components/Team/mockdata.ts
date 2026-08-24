import type { TeamSocials } from "@/types/types";

type Member = {
  photo: string;
  photo_alt: string;
  name: string;
  position: string;
  description: string;
  // Cole a URL completa (ex.: "https://www.linkedin.com/in/usuario").
  // Deixe "" para o ícone não aparecer no card.
  socials: TeamSocials;
};

export const members: Member[] = [
  {
    photo: "/caio-photo.png",
    photo_alt: "Caio Costa",
    name: "Caio Cesar",
    position: "Founder & Desenvolvedor",
    description:
      "Estudante de Ciência da Computação, atua principalmente no desenvolvimento Frontend e gosta de explorar diferentes áreas da tecnologia. Tem experiência com React, Next.js, TypeScript e ferramentas do ecossistema moderno de desenvolvimento. Já participou de Hackathons e Ideathons, experiências que fortaleceram seu interesse por inovação e resolução de problemas.",
    socials: {
      linkedin: "https://www.linkedin.com/in/caioccesar/",
      github: "https://github.com/caiooozs",
      instagram: "https://www.instagram.com/caaioccosta/",
      site:"https://caio-dev-two.vercel.app/"
    },
  },
  {
    photo: "/dacy-photo.png",
    photo_alt: "Dacyrrôse Melo",
    name: "Dacyrrôse Melo",
    position: "Co-Founder & Gerente de Projetos",
    description:
      "Formada em Análise e Desenvolvimento de Sistemas, atua e explora diferentes áreas da tecnologia, com experiência em programação, testes de software e Design. Já participou de Hackathons e Ideathons e criou a Hyphen para apoiar quem está começando na tecnologia. Fora da área, gosta de jogos, música, viagens e é apaixonada por dinossauros.",
    socials: {
      linkedin: "https://www.linkedin.com/in/dacyrrose-melo/",
      github: "https://github.com/Myoui-sys",
      instagram: "https://www.instagram.com/tearsleftocryb/",
      site:""
    },
  },
  {
    photo: "/evellyn-photo.png",
    photo_alt: "Evellyn Amélia",
    name: "Evellyn Amélia",
    position: "Co-Founder & Gerente de Marketing",
    description:
      "Formada em Análise e Desenvolvimento de Sistemas e Publicidade e Propaganda, duas áreas que representam bem a mistura de tecnologia e criatividade que faz parte de mim. Amo design, mídias sociais e, principalmente, criar. Gosto de transformar ideias em algo visual, explorar novas possibilidades e aprender durante o processo. E claro, sou apaixonada por anime, criatividade e tudo que envolve criar coisas novas.",
    socials: {
      linkedin: "https://www.linkedin.com/in/evellynam%C3%A9lia/",
      github: "https://github.com/evellynamelia",
      instagram: "https://www.instagram.com/evllynzx/",
      site: "https://portiflio-evellyngomes.vercel.app/"
    },
  },
];
