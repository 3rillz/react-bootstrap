// import "./blog-item.css;";

import { Button } from "react-bootstrap";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function BlogItem(props: Props) {
  function showContent(content: string) {
    alert(content);
  }
  // eslint-disable-next-line prefer-const
  let { data } = props;

  return (
    <div
      className="blog-root"
      style={{
        width: "100%",
        alignItems: "center",
        padding: "10px",
        border: "2px solid #e1e1d1",
        marginBottom: "25px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <img
        className="blog-image"
        src={data?.image}
        alt="BlogImage"
        style={{
          width: "100%",
          height: "244px",
        }}
      />
      <div
        style={{
          borderBottom: "2px double black",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      ></div>
      <div
        className="blog"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h4
          className="blog-title"
          style={{
            fontSize: "20px",
            marginBottom: "5px",
          }}
        >
          {data?.title}
        </h4>
        <pre
          className="blog-date"
          style={{
            fontSize: "12px",
          }}
        >
          {new Date(data?.date).toDateString()}
        </pre>
        <p
          className="blog-summary"
          style={{
            fontSize: "16px",
          }}
        >
          {data?.summary}
        </p>
        <div
          className="bottom-section"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="author-section"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="author-image">
              <img
                src={data?.author.image}
                alt="AuthorImage"
                style={{
                  height: "48px",
                  width: "48px",
                  borderStyle: "solid",
                  borderRadius: "28px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div
              className="author-details"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <p
                className="author-name"
                style={{
                  fontSize: "15px",
                  marginBottom: "-3px",
                }}
              >
                {data?.author.name}
              </p>
              <p
                className="author-email"
                style={{
                  fontSize: "12px",
                }}
              >
                {data?.author.email}
              </p>
            </div>
          </div>
          <Button onClick={() => showContent(data?.content)}>Read More</Button>
        </div>
      </div>
    </div>
  );
}
