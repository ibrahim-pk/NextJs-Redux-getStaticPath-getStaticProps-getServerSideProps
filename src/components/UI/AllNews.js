/* eslint-disable react/jsx-key */
import { Card } from "antd";
import { Col, Row, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
const AllNews = ({ allNews }) => {
  //console.log(allNews);
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {allNews.map((res) => (
          <Col key={res.id} className="gutter-row" span={6}>
            <Card
              title={res.title}
              style={{
                width: 300,
                minHeight: 470,
              }}
            >
              <Image
                src={res.image_url}
                alt=""
                width={250}
                height={150}
                responsive="true"
              ></Image>
              <p>{res.author}</p>
              <p>{res.release_date}</p>
              <p>{res.comment_count}</p>
              <p>{res.category}</p>
              <p>{res.description}</p>
              <Link href={`/news/${res.id}`}>
                <Button type="primary">Keep Reading</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllNews;
