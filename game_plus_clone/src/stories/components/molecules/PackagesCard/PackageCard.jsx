import "./style.scss";
import { Badge, Button } from "react-bootstrap";
import H3 from "../../atoms/H3/H3";
import P from "../../atoms/P/P";
import NextImage from "../../atoms/Img/NextImage";

export const PackageCardVersionOne = ({ data }) => {
  return (
    <div className="package-card">
      <div className="head pt-4 px-4 pb-3">
        <H3 text={data.title} classes={"text-primary text-center"} />
      </div>
      <div className="time d-flex gap-2 justify-content-center mb-4">
        <Button variant="dark">Süresiz</Button>
        <Button variant="dark">Süreli</Button>
      </div>
      <div className="content d-flex flex-column justify-content-between">
        <div className="packages">
          <div className="packages-limitless">
            {data.packages.limitless.map((item) => {
              return (
                <div className="package">
                  <div className="left">
                    <div className="d-flex">
                      <P text={item.month} classes={"p-0 text-white m-0"} />{" "}
                      {item.badge && <Badge bg="warning" />}
                    </div>
                    <div>
                      {item.purchase && (
                        <P text={item.purchase} classes={"text-light effect"} />
                      )}
                    </div>
                  </div>
                  <div className="right d-flex align-items-center">
                    {item.before && (
                      <P
                        text={item.before}
                        classes={
                          "text-warning  text-decoration-line-through effect"
                        }
                      />
                    )}
                    <P text={item.price} classes={"text-primary fs-4"} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="packages-limited">
            {data.packages.limited.map((item) => {
              return (
                <div>
                  <div className="left">
                    <div>
                      {" "}
                      <P text={item.month} />{" "}
                      {item.badge && <Badge bg="warning" />}
                    </div>
                    <div>
                      {item.purchase && (
                        <P text={item.purchase} classes={"text-light "} />
                      )}
                    </div>
                  </div>
                  <div className="right">
                    {item.before && (
                      <P
                        text={item.before}
                        classes={"text-warning  text-decoration-line-through"}
                      />
                    )}
                    <P text={item.price} classes={"text-primary fs-4"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button variant={data.variant}>SATIN AL</Button>
      </div>
    </div>
  );
};

export const PackageCardVersionTwo = ({ data }) => {
  return (
    <div className="package-card">
      <div className="head pt-5 px-4 pb-3">
        <H3 text={data.title} classes={"text-white text-center"} />
      </div>
      <div className="time d-flex gap-2 justify-content-center align-items-center text-white fs-4 f-semibold">
        <NextImage
          src={"/images/geforce.svg"}
          width={101}
          height={31}
          alt={"geforce"}
        />{" "}
        +
        <NextImage
          src={"/images/ubisoft.svg"}
          width={82}
          height={21}
          alt={"ubisoft"}
        />
      </div>
      <div className="content ">
        <div className="content-box bg-black">
          <P text={data.month} />
          <P
            text={data.before}
            classes={"text-warning  text-decoration-line-through"}
          />
          <P text={data.price} classes={"text-primary fs-4"} />
        </div>
        <Button variant={data.variant}>SATIN AL</Button>
      </div>
    </div>
  );
};
export const PackageCardVersionThree = () => {
  return (
    <div className="package-card">
      <div className="head pt-5 px-4 pb-3">
        <H3 text="BASIC" classes={"text-white text-center"} />
      </div>
      <div className="time">
        <P text={"Sınırlı Erişim"} classes={"text-light fs-6 mb-5"} />
      </div>
      <div className="content">
        <div className="content-text bg-black p-3">
          <H3 text={"Ücretsiz"} classes={"text-primary text-center"} />
          <P
            text={
              "Yoğun saatlerde bu pakete sahip kullanıcılar sınırlı kapasite nedeniyle kuyrukta bekleyebilir."
            }
            classes={"text-light "}
          />
        </div>
        <Button variant={"primary"}>SATIN AL</Button>
      </div>
    </div>
  );
};
