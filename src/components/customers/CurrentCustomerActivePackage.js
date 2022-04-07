import React, { useState } from "react";
import Card from "../container/Card";
import CardHeading from "./../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import UsePackageModal from "../bill/UsePackageModal";

const CurrentCustomerActivePackage = ({ customerId }) => {
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  const [showUsePackModal, setShowUsePackModal] = useState(false);
  const [selectedPack, setSelectedPack] = useState({});

  const onShowUsePackModal = (pack) => {
    setShowUsePackModal(true);
    setSelectedPack(pack);
  };

  const onHideUsePackModal = () => {
    setShowUsePackModal(false);
  };

  return (
    <Card className="flex-1">
      <CardHeading className=" font-medium text-base flex-1">
        Active Packages
      </CardHeading>
      <Accordion allowMultiple>
        {currCustomer.package !== undefined &&
          currCustomer.package.map((pack) => {
            if (pack.packageName !== undefined) {
              return (
                <AccordionItem size={"sm"} key={pack.packageName}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {pack.packageName}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="flex flex-col space-y-2">
                    <ListItemDBtn
                      content={"Usage Left"}
                      content2={pack.UsageLeft}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Valid till"}
                      content2={moment(pack.validTill).format("ll")}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Pack Amount"}
                      content2={pack.packageAmount}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <ListItemDBtn
                      content={"Actual Amount"}
                      content2={pack.totalAmount}
                      showBtn={false}
                      className=" text-sm"
                    />
                    <Button
                      size={"sm"}
                      fontWeight={"normal"}
                      onClick={() => {
                        onShowUsePackModal(pack);
                      }}
                    >
                      {" "}
                      Use Pack
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              );
            }
            return [];
          })}
      </Accordion>
      {showUsePackModal && (
        <UsePackageModal
          onHideModal={onHideUsePackModal}
          selectedPack={selectedPack}
          customerId={customerId}
        />
      )}
    </Card>
  );
};

export default CurrentCustomerActivePackage;
