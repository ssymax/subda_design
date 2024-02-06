'use client';

import styled from 'styled-components';

export const Headers = styled.div`
  margin: 8rem 0;
  ${({ theme }) => theme.maxWidth.lg} {
    margin: 4rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  row-gap: 10rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    row-gap: 0;
  }
`;

export const ContactsAndProfiles = styled.div`
  display: flex;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
  }
`;

export const Contacts = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  row-gap: 3rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    row-gap: 0;
  }
`;

export const Profiles = styled.div`
  width: 50%;
`;

export const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  min-width: 6rem;
  text-align: center;
  border-radius: 2rem;
  padding: 0.2rem 0;
  font-size: 1.8rem;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  padding: 0 5%;
  ${({ theme }) => theme.maxWidth.xl} {
    padding: 0;
  }
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    margin-top: -15%;
    margin-bottom: -30%;
    ${({ theme }) => theme.maxWidth.xl} {
      margin-top: -10%;
    }
    ${({ theme }) => theme.maxWidth.lg} {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }
`;

export const Empty = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 20rem;
  margin-bottom: -3rem;
  margin-top: 5%;
  ${({ theme }) => theme.maxWidth.xxl} {
    height: 7rem;
  }
  ${({ theme }) => theme.maxWidth.xxl} {
    height: 5rem;
  }
  ${({ theme }) => theme.maxWidth.lg} {
    height: 0;
  }
`;

export const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 50rem;
  margin: 5rem 0;
  border-radius: 1rem;
  filter: grayscale(100);
  ${({ theme }) => theme.maxWidth.lg} {
    height: 40rem;
    margin: 0;
    margin-top: 4rem;
  }
`;
