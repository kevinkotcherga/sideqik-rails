json.memories do
  json.array!(@memories) do |memory|
    json.date memory.date
    json.order_id memory.order_id
    json.customer_id memory.customer_id
    json.country memory.country
    json.product_code memory.product_code
    json.product_description memory.product_description
    json.quantity memory.quantity
    json.unit_price memory.unit_price
  end
end
