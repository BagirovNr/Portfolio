'use client';
import React, { useRef } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Info } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textArea';

type Field = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  rules?: Record<string, any>;
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
    placeholder: 'Please enter your last name',
    rules: {
      required: 'Last Name is required',
    },
  },
  {
    name: 'from_emailAddress',
    label: 'Email',
    type: 'email',
    placeholder: 'Please enter your email address',
    rules: {
      required: 'Email is required',
    },
  },
  {
    name: 'phone_number',
    label: 'Phone number',
    type: 'text',
    placeholder: 'Please enter your phone number',
    rules: {
      required: 'Phone number is required',
    },
  },
 
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Please enter your message',
    rules: {
      required: 'Message is required',
    },
  },
];




const Form: React.FC = () => {
  const { handleSubmit, control, formState: { errors } ,reset} = useForm<FieldValues>({});
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    emailjs
      .sendForm('service_vemw9kp', 'template_sdb9cpa', form.current, 'ulGiv5apnpYmr70XB')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          reset();
        },
        (error) => {
          console.error('Email sending failed:', error);
        },
      );


  };

  
  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}  className='flex flex-col gap-4'>
      {fields.map((field) => (
        <div key={field.name} className='flex flex-col gap-2 relative'>
          <label className='text-base font-medium text-gold'>{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=''
            rules={field.rules}
            render={({ field: controllerField }) => (
              <div className='relative'>
                {field.type === 'textarea' ? (
                  <Textarea
                    {...controllerField}
                    placeholder={field.placeholder}
                    className={`px-4 py-3 border border-solid rounded-md w-full pr-14 focus:outline-none text-black ${
                      errors[field.name] ? 'bg-red-100 border-red-500 focus:border-red-500' : 'bg-gray-200 focus:border-gray-400'
                    }`}
                    onChange={event => controllerField.onChange(event.target.value)}
                    name={field.name}
                  />
                ) : (
                  <Input
                    {...controllerField}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`px-4 py-3 border border-solid rounded-md w-full pr-14 focus:outline-none h-[50px] text-black ${
                      errors[field.name] ? 'bg-red-100 border-red-500 focus:border-red-500' : 'bg-gray-200 focus:border-gold border-gold'
                    }`}
                    onChange={event => controllerField.onChange(event.target.value)}
                    name={field.name}
                  />
                )}
              </div>
            )}
          />
          {errors[field.name] && (
            <div className='flex gap-1 items-center'>
              <Info size={16} weight='fill' color='#F97066' />
              <p className='text-red-500 text-base leading-4 font-medium mt-1'>{errors[field.name]?.message}</p>
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
