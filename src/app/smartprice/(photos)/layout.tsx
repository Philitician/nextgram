import GithubCorner from "../../../components/github-corner/GithubCorner";

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GithubCorner />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
