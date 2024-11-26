"use client";

import React from 'react';
import {Box} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import './FooterForm.css'

export default function FooterForm() {

    return(       
            <Box 
              style={{ 
                backgroundColor: '#fdfdfd', 
                display: "flex", 
                flexDirection: "column", 
                border: '2px solid #fdfdfd', 
                width: '100%',
                height: '30vw', 
                alignItems: "center", 
                paddingLeft: "0vw", 
                paddingTop: "0vw" 
              }}
            >
              <Form.Root 
                style={{ 
                  width: '100', 
                  fontFamily: 'Wevli, sans-serif',
                  display: 'flex',    // Center the entire form content
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Nome completo text field */}
                <Form.Field 
                  style={{ marginBottom: '1vw', display: 'grid', width: '45vw' }} 
                  name="Nome Completo"
                >
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'baseline', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <Form.Label 
                      style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '500', 
                        lineHeight: '2rem', 
                        color: '#000' 
                      }}
                    >
                      Nome Completo *
                    </Form.Label>
                    <Form.Message 
                      style={{ fontSize: '1rem', color: '#fd7a7a' }} 
                      match="valueMissing"
                    >
                      Digite seu nome *
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="input-field"
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-flex',
                        height: '3vw',
                        width: '100%',
                        appearance: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0.25rem',
                        padding: '0 10px',
                        fontSize: '1.2rem',
                        backgroundColor: '#fdfdfd',
                        color: '#000',
                        border: '1px solid #cdcdcd',
                        outline: 'none',
                        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.06)',
                      }}
                      type="tel"
                      required
                    />
                  </Form.Control>
                </Form.Field>
          
                {/* Flex container for two fields side by side */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  {/* Telefone/Celular Field */}
                  <Form.Field 
                    style={{ marginBottom: '0.75rem', display: 'grid', marginRight: '0.6rem', width: '48%' }} 
                    name="telefone"
                  >
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'baseline', 
                        justifyContent: 'space-between' 
                      }}
                    >
                      <Form.Label 
                        style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '2rem', color: '#000' }}
                      >
                        Telefone/Celular *
                      </Form.Label>
                      <Form.Message 
                        style={{ fontSize: '13px', color: '#fd7a7a' }} 
                        match="valueMissing"
                      >
                        Digite seu numero *
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className="input-field"
                        style={{
                          boxSizing: 'border-box',
                          display: 'inline-flex',
                          height: '3vw',
                          width: '100%',
                          appearance: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '0.25rem',
                          padding: '0 0.75rem',
                          fontSize: '1.2rem',
                          backgroundColor: '#fdfdfd',
                          color: '#000',
                          border: '1px solid #cdcdcd',
                          outline: 'none',
                          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.06)',
                        }}
                        type="tel"
                        required
                      />
                    </Form.Control>
                  </Form.Field>
          
                  {/* Email Field */}
                  <Form.Field 
                    style={{ marginBottom: '0.75rem', display: 'grid', width: '48%' }} 
                    name="email"
                  >
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'baseline', 
                        justifyContent: 'space-between' 
                      }}
                    >
                      <Form.Label 
                        style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '2rem', color: '#000' }}
                      >
                        Email *
                      </Form.Label>
                      <Form.Message 
                        style={{ fontSize: '1rem', color: '#fd7a7a' }} 
                        match="valueMissing"
                      >
                        Digite seu email *
                      </Form.Message>
                      <Form.Message 
                        style={{ fontSize: '1rem', color: '#fd7a7a' }} 
                        match="typeMismatch"
                      >
                        digite um email valido *
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className="input-field"
                        style={{
                          boxSizing: 'border-box',
                          display: 'inline-flex',
                          height: '3vw',
                          width: '100%',
                          appearance: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '0.25rem',
                          padding: '0 0.75rem',
                          fontSize: '1.2rem',
                          backgroundColor: '#fdfdfd',
                          color: '#000',
                          border: '1px solid #cdcdcd',
                          outline: 'none',
                          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.06)',
                        }}
                        type="email"
                        required
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
          
                {/* Mensagem Field */}
                <Form.Field 
                  style={{ marginBottom: '1vw', display: 'grid', width: '100%' }} 
                  name="Mensagem"
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label 
                      style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '2rem', color: '#000' }}
                    >
                      Mensagem
                    </Form.Label>
                  </div>
                  <Form.Control asChild>
                    <textarea
                      className="textarea-field"
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-flex',
                        width: '100%',
                        height:'10vw',
                        resize: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0.25rem',
                        padding: '0.75rem',
                        fontSize: '1rem',
                        backgroundColor: '#fdfdfd',
                        color: '#000',
                        border: '1px solid #cdcdcd',
                        outline: 'none',
                        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.06)',
                      }}
                      required
                    />
                  </Form.Control>
                </Form.Field>
          
                {/* Submit Button */}
                <Form.Submit asChild>
                  <button
                    className="submit-button"
                    style={{
                      marginTop: '0.0.5rem',
                      boxSizing: 'border-box',
                      display: 'inline-flex',
                      height: '3vw',
                      width: '10vw',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '0.5vw',
                      padding: '1vw',
                      fontSize: '1.5rem',
                      fontWeight: '500',
                      backgroundColor: '#3A4AEF',
                      color: '#fdfdfd',
                      border: '1px solid #cdcdcd',
                      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Enviar
                  </button>
                </Form.Submit>
              </Form.Root>
            </Box>

    );

}