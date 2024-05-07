import FAQScreen from "../src/screens/FaqScreen";

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//     Em modo DEV, sempre roda a cada acesso.
//     Roda a cada acesso que recebe.
// }

export default FAQScreen;

export async function getStaticProps() {
  const URL_API = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const response = await fetch(URL_API);
  const data = await response.json();
//Em modo DEV, sempre roda a cada acesso.
//Roda somente no Build Time.

  return {
    props: {
      data
    },
  };
}