import Link from "../src/components/Link";

export default function Page404(){
    return (
        <div>
            <h1>Você se perder e caiu na página 404 :0</h1>
            <Link href={'/'}>
                Volte para a página inicial.
            </Link>
        </div>
    )
}