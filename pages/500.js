import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";

const error = {
    code: "500",
    title: "Oops. There seems to be a problem on our side.",
    subtitle: "We are trying our best to get it fixed for you. Please try again.",
    btnText: "Reload",
    btnFunc: () => window.location.reload(),
    pageTitle: "Server Error | Antonio Nardini Virtual Tours",
};

export default function Error() {
    return (<Layout><ErrorPage error={error} /></Layout>);
}
