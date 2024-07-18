'use client';
import React, { useRef } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Info } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser'; // Import emailjs-com for sending emails

type Field = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  rules?: Record<string, any>;
};

const Form: React.FC = () => {
  const { handleSubmit, control, formState: { errors }, } = useForm<FieldValues>({
  });
  const form = useRef<HTMLFormElement>(null); // useRef for accessing the form element

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    emailjs
      .sendForm('service_vemw9kp', 'template_sdb9cpa', form.current, {
        publicKey: 'ulGiv5apnpYmr70XB', // Replace with correct API key or parameter
      })
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Email sending failed:', error);
        },
      );
  };

  const fields: Field[] = [
    {
      name: 'from_name',
      label: 'Name',
      type: 'text',
      placeholder: 'Please enter your name',
      rules: {
        required: 'Name is required',
      },
    },
    {
      name: 'from_lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Please enter your phone number',
      rules: {
        required: 'Last Name is required',
      },
    },
    {
      name: 'from_emailAddress',
      label: 'Email',
      type: 'email',
      placeholder: 'Please enter your phone number',
      rules: {
        required: 'Last Name is required',
      },
    },
    {
      name: 'phone_number',
      label: 'Phone number',
      type: 'text',
      placeholder: 'Please enter your phone number',
      rules: {
        required: 'Last Name is required',
      },
    },
  ];

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      {fields.map((field) => (
        <div key={field.name} className='flex flex-col gap-2 relative'>
          <label className='text-base font-medium'>{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=''
            rules={field.rules}
            render={({ field: controllerField }) => (
              <div className='relative'>
                <input
                  {...controllerField}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`px-4 py-3 border border-solid rounded-md w-full pr-14 focus:outline-none ${
                    errors[field.name] ? 'bg-red-100 border-red-500 focus:border-red-500' : 'bg-gray-200 focus:border-gray-400'
                  }`}
                  onChange={event => controllerField.onChange(event.target.value)}
                  name={field.name}
                />
              </div>
            )}
          />
          {errors[field.name] && (
            <div className='flex gap-1 items-center'>
              <Info size={14} weight='fill' color='#F97066' />
              <p className='text-red-500 text-sm leading-4 font-medium'>{errors[field.name]?.message}</p>
            </div>
          )}
        </div>
      ))}
      <div className='w-full flex justify-end'>
        <button className='bg-red-500 text-base font-medium text-white rounded-md px-8 py-3 hover:scale-105 cursor-pointer duration-500' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
