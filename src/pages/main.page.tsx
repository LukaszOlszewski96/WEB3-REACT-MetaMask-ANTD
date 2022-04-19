import { Button, Layout, Modal, Spin } from "antd";
import { Link } from "react-router-dom";
import { HeaderNavigation } from "../components/navigation/header.component";

export const MainPage: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout className="h-screen w-screen bg-[#14163C] flex flex-col">
      <HeaderNavigation />
      <Content>
        <div className="flex justify-center">
          <div className=" absolute left-12 top-60 w-[600px] h-[150px] space-y-3">
            <h1 className="text-4xl text-white font-sans">
              Trade in a space with freedom.
            </h1>
            <p className="text-xl text-white font-sans font-light	">
              Create your own NFT in seconds. All you have to do is add graphics
              and choose a style and AI will do the rest for you.
            </p>
            <p className="bg-[#4948E0] text-xl text-white font-sans py-1.5 w-[100px] flex justify-center rounded-lg relative top-5">
              Create
            </p>
          </div>
          <img
            className=" absolute right-60 top-16 space-y-3"
            src="SpaceX.svg"
            alt="SpaceX ship"
          />
        </div>
      </Content>
    </Layout>
  );
};
