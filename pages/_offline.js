import Layout from "@/components/Layout";
import ErrorPage from "@/components/ErrorPage";

const error = {
    code: "Offline",
    title: "Oops. Seems you are offline.",
    subtitle: "Please check your internet connection and try again.",
    btnText: "Reload",
    btnFunc: () => window.location.reload(),
    pageTitle: "Offline | Antonio Nardini Virtual Tours",
};

export default function Error() {
    return (
        <Layout>
            <ErrorPage error={error} />
        </Layout>
    );
}
