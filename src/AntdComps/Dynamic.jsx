import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Select, Input } from "antd";

function Dynamic(props) {
  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>Field {index + 1}</Divider>
                <Form.Item
                  name={[index, "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="field name" />
                </Form.Item>
                <Form.Item
                  label="Type"
                  name={[index, "type"]}
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Select.Option value="string">String</Select.Option>
                    <Select.Option value="dropdown">Dropdown</Select.Option>
                    <Select.Option value="number">Number</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name={[index, "options"]} label="Options">
                  <Input placeholder="option 1, option 2, option 3" />
                </Form.Item>
                {fields.length > 1 ? (
                  <Button
                    type="danger"
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Above Field
                  </Button>
                ) : null}
              </div>
            ))}
            <Divider />
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add field
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

export default Dynamic;
