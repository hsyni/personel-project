import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import PersonelService from "../services/personelService";

export default function PersonelList() {
  const [personels, setPersonels] = useState([]);

  useEffect(() => {
    let personelService = new PersonelService();

    personelService
      .getPersonels()
      .then((result) => setPersonels(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Personel Adi</Table.HeaderCell>
            <Table.HeaderCell>Personel Soyadi</Table.HeaderCell>
            <Table.HeaderCell>Birim</Table.HeaderCell>
            <Table.HeaderCell>Gorev</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {personels.map((personel) => (
            <Table.Row key={personel.personelId}>
              <Table.Cell>personel.personelAdi</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
