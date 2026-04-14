import React from "react";
import Banner from "./compound/Banner";
import Button from "./ui/Button";
import { HiMiniPlus } from "react-icons/hi2";

const Hero = () => {
  return (
    <div>
      <Banner>
        <Banner.Title>Friends to keep close in your life</Banner.Title>
        <Banner.Description>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </Banner.Description>
        <Banner.Actions>
          <Button variant="primary" icon={<HiMiniPlus size={25} />}>
            Add a Friend
          </Button>
        </Banner.Actions>
      </Banner>
    </div>
  );
};

export default Hero;
