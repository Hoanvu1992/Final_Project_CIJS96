const RightPane = () => {
  return (
    <div className="w-[15%] ms-10 lg:block sm:hidden ">
      <div className="border rounded-lg p-5 mb-5 h-[10%]">
        <h3 className="font-bold">Danh mục dịch vụ</h3>
        <hr className="w-2/5 border-2 border-[#433520] my-2" />
      </div>
      <div className="border rounded-lg p-5 my-5 h-[10%]">
        <h3 className="font-bold">Sản phẩm hot</h3>
        <hr className="w-2/5 border-2 border-[#433520] my-2" />
      </div>
      <div className="border rounded-lg p-5 my-5 h-[50%]">
        <h3 className="font-bold">Tin mới</h3>
        <hr className="w-2/5 border-2 border-[#433520] my-2" />
        <p className="my-2 py-2 border-b">
          Giống lúa làm nên gạo ngon nhất thế giới sẽ được trồng tại Bạc Liêu
        </p>
        <p className="my-2 py-2 border-b">
          Sẽ có nhà máy chuyên chế biến gạo ngon nhất thế giới ST25
        </p>
        <p className="my-2 py-2 border-b">
          Vì sao người Việt thích ăn gạo hữu cơ Campuchia?
        </p>
        <p>Cách phân biệt gạo lứt thường và gạo lứt huyết rồng</p>
      </div>
    </div>
  );
};

export default RightPane;
