import {
  DatePicker as AntdDatePicker,
  Form,
  Input as AntdInput,
  Select as AntdSelect,
  TimePicker as AntdTimePicker,
} from "antd";
import { ErrorMessage } from "formik";
import React from "react";
const { Item } = Form;
const { Option } = AntdSelect;
function Input(props) {
  const {
    field,
    form,
    label,
    width,
    type,
    onChange: onChangeCustom,
    disabled,
  } = props;
  const { value, onChange, onBlur, name } = field;
  const { errors } = form;
  const handleChange = (e) => {
    const { value } = e.target;
    var customEvent = {
      target: {
        value,
        name,
      },
    };
    onChange(customEvent);
    if (onChangeCustom) {
      onChangeCustom(value);
    }
  };
  return (
    <>
      <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
      <AntdInput
        disabled={disabled}
        name={name}
        value={value}
        onBlur={onBlur}
        status={errors[name] ? "error" : ""}
        onChange={handleChange}
        style={{ width: width }}
        className={"p-[0.5rem] mb-4"}
      />
      <p className="error-message w-[100%]">
        <ErrorMessage name={name} />
      </p>
    </>
  );
}
function DatePicker(props) {
  const dateFormat = "DD/MM/YYYY";
  const { form, field, label } = props;
  const { value, onBlur, name } = field;
  const { setFieldValue } = form;
  return (
    <>
      <Item>
        <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
        <AntdDatePicker
          className="w-full p-[0.5rem] mb-4"
          format={dateFormat}
          name={name}
          value={value}
          onChange={(value) => setFieldValue(name, value)}
          onBlur={onBlur}
        />
        <p className="error-message">
          <ErrorMessage name={name} />
        </p>
      </Item>
    </>
  );
}
function TimePicker(props) {
  const format = "HH:mm";
  const { form, field, label } = props;
  const { value, onBlur, name } = field;
  const { setFieldValue } = form;
  return (
    <>
      <Item>
        <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
        <AntdTimePicker
          className="w-full p-[0.5rem] mb-4"
          format={format}
          name={name}
          value={value}
          onChange={(value) => setFieldValue(name, value)}
          onBlur={onBlur}
        />
        <p className="error-message">
          <ErrorMessage name={name} />
        </p>
      </Item>
    </>
  );
}
function Select(props) {
  const { field, form, label, mode, options, width } = props;
  const { value, name, onChange } = field;
  const { errors } = form;
  const handleChange = (value) => {
    const customEvent = {
      target: {
        name: name,
        value: value,
      },
    };
    onChange(customEvent);
  };
  return (
    <>
      <Item>
        <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
        <AntdSelect
          showSearch
          value={value}
          style={{ height: "2.5rem" }}
          status={errors[name] ? "error" : ""}
          onChange={handleChange}
          mode={mode}
        >
          {options.map((item, index) => (
            <Option key={index + 1} value={item.value}>
              {item.name}
            </Option>
          ))}
        </AntdSelect>
        <p className="error-message">
          <ErrorMessage name={name} />
        </p>
      </Item>
    </>
  );
}
function SelectHorizonal(props) {
  const { field, form, label, mode, options, width } = props;
  const { value, name, onChange } = field;
  const { errors } = form;
  const handleChange = (value) => {
    const customEvent = {
      target: {
        name: name,
        value: value,
      },
    };
    onChange(customEvent);
  };
  return (
    <>
      <Item>
        <div style={{ display: "flex", alignItems: "center", gap: "0 1rem" }}>
          <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
          <AntdSelect
            showSearch
            value={value}
            defaultValue={"USD"}
            style={{ height: "2.5rem", width: "auto" }}
            status={errors[name] ? "error" : ""}
            onChange={handleChange}
            mode={mode}
          >
            {options.map((item, index) => (
              <Option key={index + 1} value={item.value}>
                {item.name}
              </Option>
            ))}
          </AntdSelect>
        </div>
        <p className="error-message">
          <ErrorMessage name={name} />
        </p>
      </Item>
    </>
  );
}
function InputPassword(props) {
  const { field, form, label, uppercase, onChange: onChangeCustom } = props;
  const { value, onChange, onBlur, name } = field;
  const { errors } = form;
  const handleChange = (e) => {
    const { value } = e.target;
    var customEvent = {
      target: {
        value: uppercase ? value.toUpperCase() : value,
        name,
      },
    };
    onChange(customEvent);
    if (onChangeCustom) {
      onChangeCustom(value);
    }
  };
  return (
    <>
      <h1 className="text-primary text-xl font-semibold mb-4">{label}</h1>
      <AntdInput.Password
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        status={errors[name] ? "error" : ""}
        className="p-[0.5rem] mb-4"
      />
      <p className="error-message">
        <ErrorMessage name={name} />
      </p>
    </>
  );
}

export {
  Input,
  InputPassword,
  DatePicker,
  TimePicker,
  Select,
  SelectHorizonal,
};
