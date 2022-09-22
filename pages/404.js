import Layout from "@/components/Layout";
import ErrorPage from "@/components/ErrorPage";

const error = {
    code: "404",
    title: "Oops. The page you were looking for doesn't exist.",
    subtitle: "It might have been removed or deleted. Please try again.",
    btnText: "Back To Home",
    btnHref: "/",
    pageTitle: "Page Not Found | Antonio Nardini Virtual Tours",
};

export default function Error() {
    return (
        <Layout>
            <ErrorPage error={error} />
        </Layout>
    );
}
