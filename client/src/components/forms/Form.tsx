import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormInputs = {
  title: string;
  description: string;
  vendor: string;
  type: string;
  price: number;
  sku: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const postProduct = await axios.post(
        "http://localhost:3000/api/shop",
        data
      );
      alert("Product was added successfully to your Shopify store!");
      console.log(postProduct.data);
      reset();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <div className="container">
      <h2>
        Create New Product for{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>Shopify</span>{" "}
        store
      </h2>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title:</label>
          <input {...register("title", { required: "Title is required" })} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label>Vendor:</label>
          <input {...register("vendor", { required: "Vendor is required" })} />
          {errors.vendor && <p>{errors.vendor.message}</p>}
        </div>

        <div>
          <label>Product Type:</label>
          <input
            {...register("type", { required: "Product type is required" })}
          />
          {errors.type && <p>{errors.type.message}</p>}
        </div>

        <div>
          <label>Price ($):</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required", min: 0.01 })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>

        <div>
          <label>SKU:</label>
          <input {...register("sku", { required: "SKU is required" })} />
          {errors.sku && <p>{errors.sku.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create New Product"}
        </button>
      </form>
    </div>
  );
};

export default Form;
