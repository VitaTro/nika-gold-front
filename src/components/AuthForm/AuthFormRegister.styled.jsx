import styled from "styled-components";

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => (props.theme.$isDarkMode ? "#fff" : "#333")};
  text-shadow: ${(props) =>
    props.theme.$isDarkMode
      ? "1px 1px 3px  rgba(0, 0, 0, 0.7)" // Світла тінь для темної теми
      : "1px 1px 3px rgba(0, 0, 0, 0.2)"}; // Темна тінь для світлої теми
  margin-bottom: 20px;
  transition: color 0.3s ease, text-shadow 0.3s ease; // Плавний перехід
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 25px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;
export const LabelForm = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

export const InputForm = styled.input`
  padding: 10px 14px;
  width: 90%;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4cb0d4;
    box-shadow: 0 0 5px rgba(76, 176, 212, 0.5);
  }

  &:hover {
    border-color: #777;
  }

  margin-bottom: 15px;
`;

export const ButtonForm = styled.button`
  padding: 12px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.95);
  }
`;
export const ItemForm = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  gap: 10px;
  font-size: 18px;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
