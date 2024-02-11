import DashLayout from "@/components/DashLayout";

export default function AddProduct() {
    return (
        <div>
            need here add product from
        </div>
    );
}

AddProduct.getLayout = function getLayout(page) {
    return <DashLayout>{page}</DashLayout>;
};