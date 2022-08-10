import React from "react";
import { useParams } from "react-router";
import { Card, Image, Button } from "semantic-ui-react";
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
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{personel.ad + " " + personel.soyad}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
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
      </Card.Group>
    </div>
  );
}
