/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogItem from "../../components/blog/blog-item";
import { data } from "../../data/blog/index";
import HomeHeader from "../../layouts/headers/home";
import NewsLetter from "../../layouts/sections";
import CallToAction from "../../components/cta";
import CTAImage from "../../assets/images/2.png";
import { BrandI, brands, brands2, brands3, brands4 } from "../../data/brands";

function Item(props: BrandI) {
  const { name, logo } = props;
  return (
    <div>
      <img title={name} src={logo} alt="" width={144} />
    </div>
  );
}

export default function HomePage(): React.JSX.Element {
  const [arr, setArr] = useState<BrandI[] | null>();
  const name: string = "S";

  useEffect(() => {
    switch (name) {
      case "A":
        setArr(brands);
        break;
      case "P":
        setArr(brands2);
        break;
      case "S":
        setArr(brands3);
        break;
      case "F":
        setArr(brands4);
        break;
      default:
        setArr(null);
    }
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="container d-flex justify-content-between">
        {arr?.map((item: BrandI) => (
          <Item name={item.name} logo={item.logo} />
        ))}
      </div>
      <CallToAction
        title="Who We Are"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium eligendi aliquam sunt quas pariatur quibusdam suscipit exercitationem sint doloremque odit, natus reiciendis ex alias libero ad cumque eveniet esse? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nobis!"
        image={CTAImage}
        buttonText="Get Started"
        url="/about"
      />

      <Container>
        <h1 className="text-center">Our Blog Post</h1>
        <Row>
          {data?.map((item: any, index: number) => (
            <Col key={index} sm={6} md={6} lg={4} xs={12}>
              <BlogItem data={item} />
            </Col>
          ))}
        </Row>
        <NewsLetter />
      </Container>
    </>
  );
}
