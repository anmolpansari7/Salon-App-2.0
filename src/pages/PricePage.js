import React, { useEffect } from "react";
import PageContainer from "../components/container/PageContainer";
import PriceList from "../components/services/PriceList";
import { useDispatch, useSelector } from "react-redux";
import { getServicesData } from "../store/services-actions";

const PricePage = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceList.services);

  useEffect(() => {
    dispatch(getServicesData());
  }, [dispatch]);

  return (
    <PageContainer>
      <PriceList
        title="Price List for Male"
        gender="M"
        category="regular"
        height="max-h-[40.5rem]"
        width="w-1/3"
        services={services}
      />
      <PriceList
        title="Price List for Female"
        gender="F"
        category="regular"
        height="max-h-[40.5rem]"
        width="w-1/3"
        services={services}
      />
      <div className="flex flex-col justify-between w-1/3 h-[40.5rem]">
        <PriceList
          title="Deal List for Male"
          gender="M"
          category="deals"
          height="h-1/2 max-h-[19.5rem]"
          width="w-full"
          services={services}
        />
        <PriceList
          title="Deal List for Female"
          gender="F"
          category="deals"
          height="h-1/2 max-h-[19.5rem]"
          width="w-full"
          services={services}
        />
      </div>
    </PageContainer>
  );
};

export default PricePage;
