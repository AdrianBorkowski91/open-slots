import { EventCard } from "@/lib/data/events/types";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { EVENT_THUMBNAIL_PLACEHOLDER_URL } from "@/lib/consts";

interface EventCardItemProps {
  eventCard: EventCard;
}

export default function EventCardItem({ eventCard }: EventCardItemProps) {
  return (
    <Item variant="outline">
      <Image
        src={eventCard.thumbnailUrl ?? EVENT_THUMBNAIL_PLACEHOLDER_URL}
        alt={eventCard.title}
        width={300}
        height={200}
      />
      <ItemMedia variant={"image"}></ItemMedia>

      <ItemContent>
        <ItemTitle>{eventCard.title}</ItemTitle>

        <ItemDescription>
          Praktyczne warsztaty z budowy aplikacji.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge>8 z 20 miejsc</Badge>
        <Button>Zapisz się</Button>
      </ItemActions>
    </Item>
  );
}
