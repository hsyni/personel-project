import React from "react";
import { useParams } from "react-router";
import { Divider, Header, Icon, Table, Button, Image } from "semantic-ui-react";
import PersonelService from "../services/personelService";
import { useState, useEffect } from "react";

export default function PersonelDetail() {
  let { id } = useParams();

  const [personel, setPersonel] = useState({});

  useEffect(() => {
    let personelService = new PersonelService();

    personelService
      .getPersonelsById(id)
      .then((result) => setPersonel(result.data.data));
  }, [id]);

  return (
    <div>
      {/* <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{personel.ad + " " + personel.soyad}</Card.Header>

            <Card.Description>
              <strong>Kan Grubu: </strong> {personel.kanGrubuId}
            </Card.Description>
            <Card.Description>
              <strong>Medeni Durum: </strong> {personel.medeniDurumId}
            </Card.Description>
            <Card.Description>
              <strong>Baba Ad: </strong>
              {personel.baba_Ad}
            </Card.Description>
            <Card.Description>
              <strong>Ana Ad: </strong> {personel.ana_Ad}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group> */}
      <Image
        src="https://i.picsum.photos/id/48/200/200.jpg?hmac=3FKJwSlm1FM1GD916vZX2Z3HUjHsUXvQM3rYWYXsQvc"
        size="medium"
        centered
        circular
      />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          {personel.ad + " " + personel.soyad}
        </Header>
      </Divider>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="address card" />
          Bilgiler
        </Header>
      </Divider>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Baba Adı</Table.Cell>
            <Table.Cell>{personel.baba_Ad}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Anne Ad</Table.Cell>
            <Table.Cell>{personel.ana_Ad}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Medeni Durum</Table.Cell>
            <Table.Cell>{personel.medeniDurumId}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Kan Grubu</Table.Cell>
            <Table.Cell>{personel.kanGrubuId}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button positive floated="left">
        Düzenle
      </Button>
      <Button negative floated="right">
        Sil
      </Button>
    </div>
  );
}
