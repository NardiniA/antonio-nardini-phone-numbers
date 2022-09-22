import Layout from "@/components/Layout";
import ErrorPage from "@/components/ErrorPage";

function Error({ statusCode }) {
    console.log("Custom Error Page");
    
    return (
        <Layout>
            <ErrorPage error={{
                code: statusCode + "",
                title: "Oops. There seems to have been an error.",
                subtitle: "Please try again or contact us.",
                btnText: "Back To Home",
                btnHref: "/",
                pageTitle: "Error | Antonio Nardini Virtual Tours",
            }} />
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;