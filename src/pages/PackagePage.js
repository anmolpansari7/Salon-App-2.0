import React from "react";
import PageContainer from "../components/container/PageContainer";
import CreatePackageBox from "../components/package/CreatePackageBox";
import PackMessagePreviewBox from "../components/package/PackMessagePreviewBox";
import PreviousPackagesBox from "../components/package/PreviousPackagesBox";

const PackagePage = () => {
  return (
    <PageContainer>
      <CreatePackageBox />
      <PackMessagePreviewBox />
      <PreviousPackagesBox />
    </PageContainer>
  );
};

export default PackagePage;
