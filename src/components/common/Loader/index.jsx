import React from "react";
import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 h-screen flex items-center justify-center z-100">
          <SyncLoader loading={isLoading} color="#ab1e56" />
        </div>
      )}
    </>
  );
};

export default Loader;

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setLoader(true));
//   }, []);
