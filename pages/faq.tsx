import PageTitle from "@/components/pageTitle/PageTitle";
import Accordion from "@/components/patterns/Accordion/Accordion";
import { Icon } from "@/theme/components";
import { theme } from "@/theme/theme";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps(){
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor)=>{
        return respostaDoServidor.json();
    })
    .then((resposta)=>{
        return resposta;
    });


    return {
        props: {
            qualquercoisa: "que eu passar",
            faq,
        }
    }
}

export default function FAQ({ faq }){   
    const [show, setShow] =useState(false);    
    
    return (
      <div style={{ padding: "1rem", backgroundColor: "#F7F7F7" }}>
        <PageTitle>Faq - Alura cases campanha</PageTitle>
        <h1>Alura Cases - Página de FAQ</h1>
        <Link href="/" style={{display: "flex", alignItems: "center"}}>
          <div style={{ width: "10px", marginRight: "4px", transform: "rotate(180deg)" }}>
            <Icon
                        styleSheet={{
                            iconVariant: "chevronRight",
                            marginLeft: theme.space.xpx,
                        }}
                        aria-hidden="true" as={undefined}            />
          </div>{" "}
          Ir para a home
        </Link>

        {faq.map(({ answer, question }) => (
          <article key={question} style={{ margin: "1rem 0" }}>
            <Accordion
              title={question}
              styleChildren={{ color: "6731ff", cursor: "pointer" }}
              startClosed={true}
            >
              <p className={``}>{answer}</p>
            </Accordion>
          </article>
        ))}
      </div>
    );
}